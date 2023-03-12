import { Router } from 'express';
import { sample_avatarpart, sample_tags } from '../data';
import asyncHandler from 'express-async-handler';
import { AvatarPartModel } from '../models/avatarpart.model';

const router = Router();

// Seed avatar parts data
router.get("/seed", asyncHandler(
    async (req, res) => {
        const avatarpartsCount = await AvatarPartModel.countDocuments();
        if (avatarpartsCount > 0) {
            res.send("Seed is already done")
            return;
        }
        await AvatarPartModel.create(sample_avatarpart);
        res.send("Seed Is Done!");
    }
));

// Get all avatar parts
router.get("/", asyncHandler(
    async (req, res) => {
        const avatarparts = await AvatarPartModel.find();
        res.send(avatarparts);
    }
));

// Search avatar parts by name
router.get("/search/:searchTerm", asyncHandler(
    async (req, res) => {
        // create regular expression "i" = insencetive
        const searchRegex = new RegExp(req.params.searchTerm, 'i');
        const avatarparts = await AvatarPartModel.find({ name: { $regex:searchRegex } });
        res.send(avatarparts);
    }
));

// Get tags and the number of avatar parts for each tag
router.get("/tags", asyncHandler(
    async (req, res) => {
        const tags = await AvatarPartModel.aggregate([
            {
                $unwind: '$tags'
            },
            {
                $group: {
                    _id: '$tags',
                    count: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    name: '$_id',
                    count: '$count'
                }
            }
        ]).sort({ count: -1 });

        const all = {
            name: 'All',
            count: await AvatarPartModel.countDocuments()
        }

        tags.unshift(all); // opposite of push
        res.send(tags);
    }
));

// Get all avatar parts with a specific tag
router.get("/tag/:tagName", asyncHandler(
    async (req, res) => {
        const avatarparts = await AvatarPartModel.find({ tags: req.params.tagName });
        res.send(avatarparts);
    }
));

// Get a specific avatar part by id
router.get("/:avatarpartId", asyncHandler(
    async (req, res) => {
        const avatarpart = await AvatarPartModel.findById(req.params.avatarpartId);
        res.send(avatarpart);
    }
));

export default router;
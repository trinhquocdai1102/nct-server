const express = require('express');
const favoriteRouter = express.Router();
const FavoriteModel = require('../models/Favorite');

favoriteRouter.get('', (req, res, next) => {
    FavoriteModel.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

favoriteRouter.post('', (req, res, next) => {
    FavoriteModel.create({
        artist: req.body.artist,
        dateCreate: req.body.dateCreate,
        dateRelease: req.body.dateRelease,
        description: req.body.description,
        duration: req.body.duration,
        genreKey: req.body.genreKey,
        isMyPlaylist: req.body.isMyPlaylist,
        key: req.body.key,
        provider: req.body.provider,
        refMapping: req.body.refMapping,
        statusAddPlaylistValue: req.body.statusAddPlaylistValue,
        statusDownloadValue: req.body.statusDownloadValue,
        statusPlayValue: req.body.statusPlayValue,
        statusViewValue: req.body.statusViewValue,
        streamUrls: req.body.streamUrls,
        thumbnail: req.body.thumbnail,
        title: req.body.title,
        type: req.body.type,
        uploadBy: req.body.uploadBy,
    })
        .then((data) => {
            res.json('Create Item Successfully');
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

favoriteRouter.put('/:id', (req, res, next) => {
    FavoriteModel.updateOne(
        {
            _id: req.params.id,
        },
        {
            artist: req.body.artist,
            dateCreate: req.body.dateCreate,
            dateRelease: req.body.dateRelease,
            description: req.body.description,
            duration: req.body.duration,
            genreKey: req.body.genreKey,
            isMyPlaylist: req.body.isMyPlaylist,
            key: req.body.key,
            provider: req.body.provider,
            refMapping: req.body.refMapping,
            statusAddPlaylistValue: req.body.statusAddPlaylistValue,
            statusDownloadValue: req.body.statusDownloadValue,
            statusPlayValue: req.body.statusPlayValue,
            statusViewValue: req.body.statusViewValue,
            streamUrls: req.body.streamUrls,
            thumbnail: req.body.thumbnail,
            title: req.body.title,
            type: req.body.type,
            uploadBy: req.body.uploadBy,
        }
    )
        .then((data) => {
            res.json('Update Item Successfully');
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

favoriteRouter.delete('/:id', (req, res, next) => {
    FavoriteModel.deleteOne({
        _id: req.params.id,
    })
        .then((data) => {
            res.json('Delete Item Successfully');
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

module.exports = favoriteRouter;

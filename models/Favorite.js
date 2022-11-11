const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nct', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
    artist: [],
    dateCreate: Number,
    dateRelease: Number,
    description: String,
    duration: String,
    genreKey: String,
    isMyPlaylist: Boolean,
    key: String,
    provider: String | null,
    refMapping: [],
    statusAddPlaylistValue: Number,
    statusDownloadValue: Number,
    statusPlayValue: Number,
    statusViewValue: Number,
    streamUrls: [],
    thumbnail: String,
    title: String,
    type: String,
    uploadBy: String | null,
});

const FavoriteModel = mongoose.model('favorite', FavoriteSchema);

module.exports = FavoriteModel;

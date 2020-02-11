const socketio = require('socket.io');
const parseStringAsArray = require('./controllers/utils/parseStringAsArray')
const calculateDistance = require('./controllers/utils/calculateDistance')

const connectios = []

exports.setupWebsocket = (server) => {
    const io = socketio(server);

    io.on('connection', socket => {
        const { latitude, longitude, techs} = socket.handshake.query

        connectios.push({
            id: socket.id,
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(longitude),
            },
            techs: parseStringAsArray(techs),
        });
    });
};

exports.findConnections = (coordinates, techs) => {
    return connectios.filter(connectios => {
        return calculateDistance(coordinates, connection.coordinates) < 10
            && connection.techs.some(item => techs.includes(item))
    })
}
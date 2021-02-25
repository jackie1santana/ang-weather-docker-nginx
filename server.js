const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./model/graphqlSchema");
const morgan = require('morgan')


const app = express()

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });
 
const PORT = 3000

app.use(cors())
app.use(morgan('combined'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// app.use(express.static(path.join(__dirname, 'client/dist')))
app.get('/', (req, res) => {
	res.send('wassubsip')
})





mongoose.connect('mongodb://mongo:27017/users', {useNewUrlParser: true, useUnifiedTopology: true});

const User = mongoose.model('User', { name: String });

const userOne = new User({ name: 'g' });
userOne.save().then(() => console.log('hiiisiiiiii'));

console.log('helddfdf')

app.listen(PORT, () => {
	console.log(`local server running on port ${PORT}`)
})

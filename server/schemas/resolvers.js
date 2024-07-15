const { Book, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (!context.user) {
                throw new AuthenticationError('You must be logged in.');
            }
            const singleUser = await User.find(
                { _id: context.user._id }
            )
                .populate('savedBooks');

            return singleUser;
        }
    },

    Mutation: {
        createUser: async (parent, args) => {
            
            const newUser = await User.create(args);
            const token = signToken(newUser);
            return { token, newUser };
        },
        login: async (parent, { email, password }) => {

            const user = await User.findOne({ email: email });
            const correctPassword = await user.isCorrectPassword(password);

            if (!user || !correctPassword) {
                throw new AuthenticationError('Invalid email or password')
            }

            const token = signToken(user);
            return { token, user };
        },
        saveBook: async (parent, { input }, context) => {

            const user = context.user._id;
            if (!user) {
                throw new AuthenticationError('You must be logged in.')
            };

            const updatedUser = await User.findOneAndUpdate(
                { _id: user },
                { $addToSet: { savedBooks: { input } } },
                { new: true, runValidators: true }
            );
            return updatedUser;

        },
        deleteBook: async (parent, bookId, context) => {

            const user = context.user._id;
            if (!user) {
                throw new AuthenticationError('You must be logged in.')
            };

            const updatedUser = await User.findOneAndUpdate(
                { _id: user },
                { $pull: { savedBooks: { bookId } } },
                { new: true, runValidators: true }
            );
            return updatedUser;
        }
    }
};

module.exports = resolvers;
export const GET_ME = `
    query Me($username: String, $id: ID) {
    me(username: $username, _id: $id) {
        _id
        email
        password
        savedBooks {
        authors
        bookId
        description
        image
        link
        title
        }
        username
    }
    }
`
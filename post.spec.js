const fs = require('fs')
const { promisify } = require('util')

const matter = require('gray-matter')
const recursiveReadDir = require('recursive-readdir' )

const readFilePromise = promisify(fs.readFile)

describe('We can run tests on CI to catch certain silly mistakes', () => {
  test('every post has certain required fields in front matter', () => {
    // read every file in the posts directory and verify that it has
    // the correct required front matter fields
    return recursiveReadDir('posts').then(posts => {
      const fileReadPromises = posts.map(filePath => {
        return readFilePromise(filePath)
      })
      return Promise.all(fileReadPromises)
    }).then(result => {

    // we have an array of all the results
      result.map(file => {
        const { data } = matter(file)
        expect(data).toHaveProperty('slug')
        expect(data).toHaveProperty('title')
      })
    })
  })
})



// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document schemas
import author from './documents/author'
import entry from './documents/entry'
import event from './documents/event'
import page from './documents/page'
import position from './documents/position'
import project from './documents/project'
import quote from './documents/quote'
import route from './documents/route'
import siteSettings from './documents/siteSettings'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import mainImage from './objects/mainImage'
import portableText from './objects/portableText'
import textSection from './objects/textSection'
import youtube from './objects/youtube'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Documents
    author,
    entry,
    event,
    page,
    position,
    project,
    quote,
    route,
    siteSettings,

    // Objects
    bodyPortableText,
    mainImage,
    portableText,
    textSection,
    youtube,
  ]),
})

const NextI18Next = require('next-i18next').default
const path = require('path')
module.exports = new NextI18Next({
    otherLanguages: ['es', 'de'],
    defaultNS: 'common',
    localeSubpaths: {
        es: 'es',
        de: 'de'     
    },
    localePath: path.resolve('./public/static/locales')

})


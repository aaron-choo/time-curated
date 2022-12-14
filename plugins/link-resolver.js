export default function (doc) {
    const prefix = doc.lang === 'en-us' ? '' : `/${doc.lang}`
    if (doc.isBroken) {
        return `${prefix}/not-found`;
    }
    if (doc.type === 'article_category') {
        return `${prefix}/articles/${doc.uid}`;
    }
    if (doc.type === 'article') {
        return (`${prefix}/articles/${doc.data.article_category.uid}/${doc.uid}`);
    }
    if (doc.type === 'product_category') {
        return `${prefix}/shop/${doc.uid}`;
    }
    if (doc.type === 'product') {
        return (`${prefix}/shop/${doc.data.product_category.uid}/${doc.uid}`);
    }
    if (doc.type === 'collection') {
        return `${prefix}/collection/${doc.uid}`;
    }
    if (doc.type === 'page') {
        return doc.uid === 'home' ? prefix || '/' : `${prefix}/${doc.uid}`
    }
    return '/not-found';
}
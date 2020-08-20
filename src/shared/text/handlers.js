function _getFont(type){
    const fonts = {
        bold: 'roboto-medium',
        medium: 'roboto-medium',
        light: 'roboto-light',
        heavy: 'roboto-heavy',
        book: 'roboto-medium',
    }

    return fonts[type]
}



export {
    _getFont
}
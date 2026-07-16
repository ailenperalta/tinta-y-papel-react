export const validateProduct = (product) => {
    const errors = {};

    if (!product.name.trim()) {
        errors.name = "El nombre es obligatorio";
    }

    if (!product.author.trim()) {
        errors.author = "El nombre del autor es obligatoria";
    }

    if (!product.description.trim()) {
        errors.description = "La descripción es obligatoria";
    }

    if (!product.price || product.price <= 0) {
        errors.price = "El precio debe ser mayor que 0";
    }

    if (!product.file) {
        errors.file = "Debes seleccionar una imagen";
    }

    return errors;
}
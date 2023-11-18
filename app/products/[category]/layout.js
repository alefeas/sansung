const ProductsLayout = ({children}) => {
    return (
        <div>
            <h2 className="mt-10 flex justify-center text-2xl">Productos</h2>
            {children}
        </div>
    )
}

export default ProductsLayout
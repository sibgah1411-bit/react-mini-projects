import { ThemeProvider, useThemeAPI } from './ThemeAPI'
import ProductCard from './ProductCard'
import ToggleTheme from './ToggleTheme';


function ProductDisplay() {
    const { products } = useThemeAPI(); 

    return (
        <div className="flex flex-wrap gap-8 justify-center p-10 bg-gray-900">
            <div className="w-full max-w-7xl mx-auto flex justify-end p-4">
                <ToggleTheme />
            </div>
            {products.slice (0, 16).map((item) => (
                <div key={item.id} className="w-80">
                    <ProductCard product={item} />
                </div>
            ))}
        </div>
    )
}
export default function App() {
    return (
        <ThemeProvider>
            <ProductDisplay />
        </ThemeProvider>
    )
}

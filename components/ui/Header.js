import MenuList from "./MenuList.js"
import Image from "next/image.js"

const Header = () => {
    return (
        <header className="flex justify-between m-auto bg-gray-300 items-center h-30">
            <Image 
                alt={'Logo Sansung'}
                src={`/images/logo.png`}
                width={100}
                height={100}
                className="ml-8"
            />
            <MenuList/>
        </header>
    )
}

export default Header
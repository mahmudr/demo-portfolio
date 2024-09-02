import '../app/globals.css';
import type { AppProps } from 'next/app';
import {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from '../components/ui/navigation-menu';

import logo from '../assets/img/logo.svg';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationMenu className="bg-gray-800 p-4 ms-auto">
        <NavigationMenuList className="flex space-x-4 ms-auto" >
          <NavigationMenuItem>
            
              <NavigationMenuLink href="/">
                <p className="text-white ">Home</p>
              </NavigationMenuLink>
            
          </NavigationMenuItem>
          <NavigationMenuItem>
            
              <NavigationMenuLink href="/skills">
                <p className="text-white">Skills</p>
              </NavigationMenuLink>
            
          </NavigationMenuItem>
          <NavigationMenuItem>
            
              <NavigationMenuLink href="/contact">
                <p className="text-white">Contact</p>
              </NavigationMenuLink>
            
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuIndicator />
        <NavigationMenuViewport />
      </NavigationMenu>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
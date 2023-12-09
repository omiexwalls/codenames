import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '~/components/ui/navigation-menu';
import { cn } from '~/lib/utils';
import { forwardRef } from 'react';
import { UserButton } from '@clerk/remix';

const ListItem = forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export default function Toolbar() {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <NavigationMenu className="px-4 py-2 flex-1">
        <NavigationMenuList>
          <NavigationMenuItem className="text-2xl font-bold">
            Codenames
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Play</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/new" title="Create a Game">
                  Create a new game and invite your friends.
                </ListItem>
                <ListItem href="/lobby" title="Go to the Lobby">
                  See who's online and join a game.
                </ListItem>
                <ListItem href="/matchmaking" title="Matchmaking">
                  Let us find a game for you.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <UserButton />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

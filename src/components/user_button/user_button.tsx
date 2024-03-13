// import { auth, UserButton } from "@clerk/nextjs"

import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs"

export default function UserAuthButton() {


    return (
        <>
            {/* {
                userId ? (
                    <UserButton />
                ) : (
                    <NavbarContent justify="end">
                        <NavbarItem className="hidden lg:flex">
                            <Link href="#" color="foreground">Login</Link>
                        </NavbarItem >
                        <NavbarItem>
                            <Button as={Link} color="warning" href="#" variant="flat">
                                Sign Up
                            </Button>
                        </NavbarItem>
                    </NavbarContent >
                )
            } */}
            <SignedIn>
                {/* Mount the UserButton component */}
                <UserButton />
            </SignedIn>
            <SignedOut>
                {/* Signed out users get sign in button */}
                <SignInButton />
            </SignedOut>
        </>
    )
}
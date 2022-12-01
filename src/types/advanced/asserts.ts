type newUser = {
    name: string,
    displeyName: string | null
}

function assertDisplayName(user: newUser): asserts user is newUser & {displayName: string} {
    if (!user.displeyName) throw new Error('User has no displayName field')
}

function logUserByDisplayName(user: newUser) {
    assertDisplayName(user)
    // @ts-ignore
    console.log(user.displeyName.toUpperCase())
}
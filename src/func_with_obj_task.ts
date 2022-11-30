interface User {
    login: string,
    email: string,
    password: string,
    isOnline: boolean,
    lastVisited: string
}
interface Admin {
    login: string,
    email: string,
    password: string,
    isOnline: boolean,
    lastVisited: string,
    role: string
}

const firstUser = {
    login: 'oleg',
    email: 'oleg@oleg.ru',
    password: 'qwer1234',
    isOnline: true,
    lastVisited: new Date()
}
const adminUser = {
    login: 'oleg',
    email: 'oleg@oleg.ru',
    password: 'qwer1234',
    isOnline: true,
    lastVisited: new Date(),
    role: 'SuperAdmin'
}
function login(user: {login: string, password: string}) {
    if (user.login.length > 0, user.password.length > 0) {
        console.log(`Hello ${user.login}`)
    }
}
login(firstUser)
login(adminUser)
type Level = 'junior' | 'middle' | 'senior'

interface Developer {
    login: string,
    skills: string[],
    level: Level
}

export function gradeDeveloper(dev: { level: Level }, newLevel: Level) {
    dev.level = newLevel
}

const newDev: Developer = {
    level: 'junior',
    login: 'Oleg',
    skills: ['html', 'css', 'js', 'ts']
}
gradeDeveloper(newDev, 'middle')
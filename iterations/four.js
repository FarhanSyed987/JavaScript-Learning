const myObject={
    js: "javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by apple"
}

for (const key in myObject) {
    // if (!Object.hasOwn(object, key)) continue;
    
    // const element = object[key];
    console.log(`${key} is the shortcut for ${myObject[key]}`);
}
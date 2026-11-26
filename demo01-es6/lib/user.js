const user = {
    username: "张三",
    age: 18
}

const isAudlt = (age) => {
    if (age < 18) {
        console.log("未成年");
    } else {
        console.log("成年人")
    }
}

export { user, isAudlt }
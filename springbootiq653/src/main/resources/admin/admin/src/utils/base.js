const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootiq653/",
            name: "springbootiq653",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootiq653/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "在线考试系统研究与实现"
        } 
    }
}
export default base

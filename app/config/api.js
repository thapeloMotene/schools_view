var api ={
    getSchools(){
         return fetch('http://10.0.0.26:3000/schools').then(res => res.json());
    }
};

export default api;
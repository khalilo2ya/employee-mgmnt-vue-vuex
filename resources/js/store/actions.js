import Vue from 'vue';

import { axios } from 'vue/types/umd';


let loader = null;

function displayLoader(loadingText = "Loading...") {
    loader = Vue.prototype.$loading({
        lock: true,
        text: loadingText,
        spinner: 'el-icon-loading',
        background: 'rgba(255,255,255,0.85)',
    });
}

function removeLoader() {
    loader.close();
}

export const saveEmployee = ({ commit }, payload) => {
    displayLoader();

    axios(`/save-employee`, payload).then(res => {
        Vue.prototype.$notify({
            title: 'Success',
            message: 'Employee added successfully',
            type: 'success',
        })

        removeLoader();

        setTimeout(() => {
            window.location.href = '/employees'
        }, 2000);
    })
}

import axios from "axios";

export class GenericEntity {

    constructor({ url }) {
        this.url = url;
    }

    async load() {
        return {};
    }

    async save() {
        let url = `${this.url}`;
        const resp = await axios.post(url, this);
        if (resp.status == 200)
            Object.assign(this, resp.data);
        return this;
    }

    async alter() {
        return {};
    }

    async delete() {
        return {};
    }

}
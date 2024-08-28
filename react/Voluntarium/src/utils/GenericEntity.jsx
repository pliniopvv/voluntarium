export class GenericEntity {

    constructor({ url }) {
        this.url = url;
    }

    async load() {
        return {};
    }

    async save() {
        return {};
    }

    async alter() {
        return {};
    }

    async delete() {
        return {};
    }

}
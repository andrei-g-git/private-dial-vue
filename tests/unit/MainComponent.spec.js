import MainComponent from '@/components/MainComponent.vue'
import { shallowMount } from '@vue/test-utils'
import Vue from 'vue/dist/vue.js';

let wrapper = null;

beforeEach(() => {
    wrapper = shallowMount(MainComponent);
});

afterEach(() => {
    wrapper.destroy();
});

describe('MainComponent', () => {
    it('renders all groups,', async () => {
        await wrapper.vm.addGroup('misc');
        await wrapper.vm.addGroup('utilities');
        await wrapper.vm.addGroup('pupular');

        expect(wrapper.vm.bookmarkGroups.getLength()).toBe(4);

        expect(wrapper.vm.bookmarkGroups.getGroupAt(1).getName()).toBe('misc');

        const allgroups = wrapper.findAll('.bookmark-group-wrapper');

        expect(allgroups.length).toBe(4); //3 plus default group


    });

    it('toggles modal visibility prop on', async () => {
        await wrapper.vm.$emit('clickedAddGroup');
        //expect(wrapper.vm.showNewGroupModal).toBe(true);
    });

/*     it('renders only one set of groups and an add button', () => { ---------//multiple sets were made because I  included the other components in the vfor loop
    //this should be an integration test, needs too many dependencies
    }); */
});

/* Vue.component('NewGroupButtonMOCK', {
    methods: {
        onAdd: function(){
            this.$emit('clickedAddGroup');
        }
    },
    template: '<div></div>'
}); */
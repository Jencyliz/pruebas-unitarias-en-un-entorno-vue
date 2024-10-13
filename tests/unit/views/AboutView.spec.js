import { shallowMount } from '@vue/test-utils';
import AboutView from '@/views/AboutView.vue';

describe('AboutView.vue', () => {
  it('renders About page', () => {
    const wrapper = shallowMount(AboutView);
    expect(wrapper.text()).toContain('About Us');
  });

  it('matches the snapshot', () => {
    const wrapper = shallowMount(AboutView);
    expect(wrapper.html()).toMatchSnapshot();
  });
});

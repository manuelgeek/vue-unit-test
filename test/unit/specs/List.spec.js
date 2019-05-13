import { mount } from 'avoriaz';
import List from '@/components/List';
import Vue from 'vue';

describe('List.vue', () => {
  // previous tests ..
  it('displays items from the list', () => {
    const ListComponent = mount(List);
    expect(ListComponent.text()).to.contain('play games');
})

  it('adds new item to list on click with avoriaz', () => {
       // build component
    const ListComponent = mount(List);

    // set input value
    ListComponent.setData({
      newItem: 'brush my teeth',
    });

    // simulate click event
    const button = ListComponent.find('button')[0];
    button.trigger('click');

    // assert list contains new item
    expect(ListComponent.text()).to.contain('brush my teeth');
    expect(ListComponent.data().listItems).to.contain('brush my teeth');
  })
})
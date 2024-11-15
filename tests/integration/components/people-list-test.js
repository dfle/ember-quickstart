import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-quickstart/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | people-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.setProperties('people', ['Bulbasaur', 'Charmander', 'Squirtle']);
    await render(hbs`
      <PeopleList
        @title="List of Pokemon"
        @people={{this.people}}
    />`);

    assert.dom('h2').hasText('List of Pokemon');
  });
});

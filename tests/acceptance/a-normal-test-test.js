import { module, test } from 'qunit';
import { visit, currentURL, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | a normal test', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /a-normal-test', async function(assert) {
    await visit('/');

    assert.ok(find('.did-load'));
  });
});

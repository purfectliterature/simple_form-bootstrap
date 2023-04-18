//= require simple_form-bootstrap/date_time_input
//= require simple_form-bootstrap/select_input
//= require simple_form-bootstrap/token_input

(function($) {
  'use strict';
  function initializeComponents(node) {
    // Enable our date/time pickers
    const datePickers = $('input.bootstrap-datepicker', node);
    if (typeof datePickers === 'object' && typeof datePickers.datetimepicker === 'function')
      datePickers.datetimepicker();

    // Enable our styled Bootstrap select controls, only when using the default select collection.
    const selects = $('select.select.form-control', node);
    if (typeof selects === 'object' && typeof selects.selectpicker === 'function')
      selects.selectpicker();

    // Token fields for select inputs.
    const tokenfields = $('.token select.token', node);
    if (typeof tokenfields === 'object' && typeof tokenfields.tokenfield === 'function')
      tokenfields.tokenfield();
  }

  $(function() {
    initializeComponents(document);
  });
  $(document).on('MutationObserver', function(e) {
    initializeComponents(e.target);
  });
  $(document).on('nested:fieldAdded', function(e) {
    initializeComponents(e.field);
  });
})(jQuery);

$.fn.radiochecklist = function () {
    var selector = this.selector;
    this.off('click');
    this.on('click', function () {
        var me = $(this);
        var isChecked = me.is(':checked');
        if (isChecked) {
            var checkboxes = $(selector);
            for (var c = 0; c < checkboxes.length; c++) {
                var _domCheckbox = checkboxes[c];
                var _jqCheckbox = $(_domCheckbox);
                if (_domCheckbox !== me[0] && _jqCheckbox.is(':checked')) {
                    _jqCheckbox.prop('checked', false);
                }
            }
        }
    });
    return this;
};

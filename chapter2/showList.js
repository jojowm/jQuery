$(document).ready(function () {
    var $category = $('ul li:gt(5):not(:last)');
    $category.hide();
    
    var $toggleBtn = $('div.showmore > a');
    
    $toggleBtn.click(function (e) {
        e.preventDefault();    // 阻止默认行为

        if ($category.is(':visible')){
            $category.hide();
            $(this).find('span')
                .text('显示全部品牌')
                .css('background','none');
            $('ul li').removeClass('promoted');

        } else {
            $category.show();
            $(this).find('span')
                .css('background', 'red')
                .text('精简显示品牌');

            $('ul li').filter(":contains('佳能'), :contains('尼康'), :contains('奥林巴斯')")
                .addClass('promoted');
        }
    })
})
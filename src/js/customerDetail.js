// //详情内相关的显示隐藏
// // function detail(obj) {
// //   var dMain = $(obj)
// //     .parents('.list-title')
// //     .next('.list-main');
// //   if ($(obj).hasClass('active')) {
// //     dMain.show();
// //     $(obj).removeClass('active');
// //   } else {
// //     dMain.hide();
// //     $(obj).addClass('active');
// //   }
// // }

// //客户详情详细信息修改
// $(function() {
//   // $(".layer-detail-wrap .modal-dialog").click(function (e) {
//   //     if ($(e.target).isChildAndSelfOf(".message-li")) {
//   //         $(".editor[data-toggle='MessageEditor']").each(function () {
//   //             if (!$(e.target).isChildAndSelfOf(this)) {
//   //                 $(this).MessageEditor({editor: false, callback: changed(this)}, this)
//   //             }
//   //         })
//   //     }
//   //     else {
//   //         $(".editor[data-toggle='MessageEditor']").each(function () {
//   //             $(this).MessageEditor({editor: false, callback: changed(this)}, this)
//   //         })
//   //     }
//   // })
//   // $(".message-li[data-toggle='MessageEditor']").click(function (e) {
//   //     if ($(e.target).isChildAndSelfOf(".message-li")) {
//   //         $(this).MessageEditor({editor: true}, this)
//   //     }
//   // })
// });

// //客户详情中的表格全选/全部不选
// function checkboxAll(obj) {
//   var parent = $(obj).parents('.list-table');
//   var isChecked = $(obj).prop('checked');
//   parent.find('.check').prop('checked', isChecked);
// }
// //客户详情中的表格复选框选中状态，设置全选的样式
// function checkbox(obj) {
//   var parent = $(obj).parents('.list-table');
//   parent.find('.checkAll').prop('indeterminate', false);
//   if (parent.find('.check:checked').length == parent.find('.check').length) {
//     parent.find('.checkAll').prop('checked', true);
//   } else if (parent.find('.check:checked').length == 0) {
//     parent.find('.checkAll').prop('checked', false);
//   } else {
//     parent.find('.checkAll').prop('indeterminate', true);
//   }
// }

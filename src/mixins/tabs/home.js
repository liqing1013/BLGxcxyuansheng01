import wepy from 'wepy'
export default class extends wepy.mixin{
    data = {
        SwiperList:[],//轮播图数据
        active:0//底部标签栏选中的索引
    }
    onLoad(){
    //调用获取轮播图数据的方法
        // this.getSwiperList()
    }
    methods = {
        onChange(event) {
            // this.setData({ active: event.detail });
            this.active = event.detail
        }
    }
    //函数方法封装
    //获取轮播图数据的方法
    // async getSwiperList(){
    //         // 发起请求，获取轮播图数据
    //         // 当拿到数据以后，从数据对象中，把 data 解构出来，并重命名为 res
    //         // 这个 res 就是服务器返回的真实的数据
    //     const { data: res } = await wepy.GET('/home/swiperdata')
    //         // 判断请求是否成功了
    //     if (res.meta.status !== 200) {
    //         // 请求失败：弹框提示用户请求失败
        //     return wepy.showToast({
        //         // 提示的内容
        //         title: '数据获取失败！',
        //         // 不显示图标
        //         icon: 'none',
        //         // 多少秒以后自动隐藏
        //         duration: 1500
    //          })
    //     }
    //     // 请求成功
    //     this.swiperList = res.message
    //     this.$apply()
    // }
}
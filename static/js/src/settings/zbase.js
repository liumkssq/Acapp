class Settings {
    constructor(root) {
        this.root = root;
        this.platform = "WEB";
        if(this.root.AcWingOS) this.platform = "ACAPP";
        this.username="";
        this.photo="";
        this.$settings = $(`
        <div class="ac-game-settings">

        </div>
            `)
        this.root.$ac_game.append(this.$settings);
        this.start();
    }
    start() {
        this.getinfo();
    }
    register() {

    }
    login() {

    }
    getinfo() {
        let outer = this; 
        $.ajax({
            url: "https://app5905.acapp.acwing.com.cn/settings/getinfo/",
            type:"GET",
            data: {
                platform: outer.platform,
            },
            success: function(resp) {
                console.log(resp)
                if(resp.result==="success") {
                    outer.username = resp.username;
                    outer.photo = resp.photo;
                    console.log(outer.photo);
                    outer.hide();
                    outer.root.menu.show();
                } else {
                    outer.login();
                }
            }, 
        });
    }
    hide() {
        this.$settings.hide();
    }
    show() {
        this.$settings.show();
    }
}

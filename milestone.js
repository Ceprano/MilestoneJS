(function ($, window, document, undefined) {

    Milestone = {
        init: function (elem, options) {
            var self = this;
            self.$elem = $(elem);
            self.options = $.extend({}, $.fn.Milestone.options, options);
            self.drawData(self.options.series);
    
        },

        buildOneStone: function (res,index) {
            var data = res[index];
            var selectindex = index%(this.options.colors.length);
            var upsidedown = index%2;
            var marginvalue = "0px";
            
            var color = this.options.colors[selectindex];
            
            var border = "border-left: medium solid "+color.dark+";";
            if (upsidedown == 1){
                marginvalue = "-60px";
                border = "border-left: medium solid "+color.dark+";";
            }

            return "<div class='onestone' style='width:"+this.options.width+";' > "
                + "<div class='version' style='background-color:"+color.light+";"+border+"'>" + data.version + "</div>"
                + "<div class='title' style='margin-top:"+ marginvalue+ ";color:"+color.light+";border-color:"+color.dark+";'>"+ data.title + "</div>"
                + "<div class='desc'>" + data.description + "</div>" + "</div>";
        },
        drawData: function (res) {
            for (i = 0; i < res.length; i++) {
                var onestone = this.buildOneStone(res,i);
                this.$elem.append(onestone);
            };
        },
        
    };

    $.fn.Milestone = function (options) {
        return this.each(function () {
            var milestone = Object.create(Milestone);
            milestone.init(this, options);
        });
    };


    $.fn.Milestone.options = {
        width: '100px',
        colors: [
            {
                dark: '#f39c12',
                light: '#f1c40f',
            }, {
                dark: '#d35400',
                light: '#e67e22',
            }, {
                dark: '#c0392b',
                light: '#e74c3c',
            }
        ],
        series: [
            {
                version: 'v1.0',
                title: 'try1',
                description: 'try1asdfasdfasdfasdfasdfasdf description'
            },
            {
                version: 'v2.0',
                title: 'try2',
                description: 'try2 description'
            },
            {
                version: 'v3.0',
                title: 'try3',
                description: 'try3 description'
            }],

    };
})(jQuery, window, document);
(function(e){function w(l,n,g){l=l.getPlotOffset();if(g.images&&g.images.show)for(var f=g.datapoints.points,e=g.datapoints.pointsize,k=0;k<f.length;k+=e){var m=f[k],a=f[k+1],c=f[k+2],b=f[k+3],d=f[k+4],p=g.xaxis,q=g.yaxis,h;if(!(!m||0>=m.width||0>=m.height||(a>b&&(h=b,b=a,a=h),c>d&&(h=d,d=c,c=h),"center"==g.images.anchor&&(h=0.5*(b-a)/(m.width-1),a-=h,b+=h,h=0.5*(d-c)/(m.height-1),c-=h,d+=h),a==b||c==d||a>=p.max||b<=p.min||c>=q.max||d<=q.min))){var r=0,s=0,t=m.width,u=m.height;a<p.min&&(r+=(t-r)*(p.min-
a)/(b-a),a=p.min);b>p.max&&(t+=(t-r)*(p.max-b)/(b-a),b=p.max);c<q.min&&(u+=(s-u)*(q.min-c)/(d-c),c=q.min);d>q.max&&(s+=(s-u)*(q.max-d)/(d-c),d=q.max);a=p.p2c(a);b=p.p2c(b);c=q.p2c(c);d=q.p2c(d);a>b&&(h=b,b=a,a=h);c>d&&(h=d,d=c,c=h);h=n.globalAlpha;n.globalAlpha*=g.images.alpha;n.drawImage(m,r,s,t-r,u-s,a+l.left,c+l.top,b-a,d-c);n.globalAlpha=h}}}function x(l,e,g,f){e.images.show&&(f.format=[{required:!0},{x:!0,number:!0,required:!0},{y:!0,number:!0,required:!0},{x:!0,number:!0,required:!0},{y:!0,
number:!0,required:!0}])}e.plot.image={};e.plot.image.loadDataImages=function(l,n,g){var f=[],v=[],k=n.series.images.show;e.each(l,function(g,a){if(k||a.images.show)a.data&&(a=a.data),e.each(a,function(a,b){"string"==typeof b[0]&&(f.push(b[0]),v.push(b))})});e.plot.image.load(f,function(f){e.each(v,function(a,c){var b=c[0];f[b]&&(c[0]=f[b])});g()})};e.plot.image.load=function(l,n){var g=l.length,f={};0==g&&n({});e.each(l,function(l,k){var m=function(){--g;f[k]=this;0==g&&n(f)};e("<img />").load(m).error(m).attr("src",
k)})};e.plot.plugins.push({init:function(e){e.hooks.processRawData.push(x);e.hooks.drawSeries.push(w)},options:{series:{images:{show:!1,alpha:1,anchor:"corner"}}},name:"image",version:"1.1"})})(jQuery);
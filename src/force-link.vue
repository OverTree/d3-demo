<template>
  <canvas height="600" width="1300"></canvas>
</template>

<script>
import * as d3 from 'd3v4';

export default {
  mounted() {
    function relation() {
      var a,
        b,
        c,
        d,
        e,
        f = 'id',
        g = 15,
        h = 600,
        i = 600,
        j = -30,
        k = 20,
        l = 2;
      (this.init = function() {
        (c = d3
          .forceSimulation()
          .force('charge', d3.forceManyBody().strength(j))
          .force('center', d3.forceCenter(h / 2, i / 2))
          .force('collide', d3.forceCollide(1.2 * g))),
          c.nodes(a).on('tick', this.render),
          c.force(
            'link',
            d3
              .forceLink()
              .links(b)
              .id(function(a) {
                return a[f];
              })
              .distance(k)
          ),
          this.initDrag(),
          (e = d.getContext('2d')),
          this.restart(),
          this.pause();
      }),
        (this.render = function() {
          e.clearRect(0, 0, h, i),
            (e.lineWidth = l),
            (e.strokeStyle = 'black'),
            e.beginPath(),
            b.forEach(function(a) {
              e.moveTo(a.source.x, a.source.y),
                e.lineTo(a.target.x, a.target.y);
            }),
            e.stroke(),
            (e.lineWidth = 3),
            (e.strokeStyle = 'black'),
            a.forEach(function(a) {
              (e.fillStyle = a.color),
                e.beginPath(),
                e.arc(a.x, a.y, a.radius, 0, 2 * Math.PI),
                e.fill(),
                e.stroke();
            }),
            (e.font = '14px Comic Sans MS'),
            (e.fillStyle = 'black'),
            (e.textAlign = 'center'),
            a.forEach(function(a) {
              e.fillText(a.name, a.x, a.y + 2.5 * a.radius);
            });
        }),
        (this.initDrag = function() {
          function a() {
            return c.find(d3.event.x, d3.event.y);
          }
          function b() {
            d3.event.active || c.alphaTarget(0.3).restart(),
              (d3.event.subject.fx = d3.event.subject.x),
              (d3.event.subject.fy = d3.event.subject.y);
          }
          function e() {
            (d3.event.subject.fx = d3.event.x),
              (d3.event.subject.fy = d3.event.y);
          }
          function f() {
            d3.event.active || c.alphaTarget(0),
              (d3.event.subject.fx = null),
              (d3.event.subject.fy = null);
          }
          d3.select(d).call(
            d3
              .drag()
              .container(d)
              .subject(a)
              .on('start', b)
              .on('drag', e)
              .on('end', f)
          );
        }),
        (this.pause = function() {
          c.stop();
        }),
        (this.run = function() {
          c.restart();
        }),
        (this.restart = function() {
          c.alpha(1), this.run();
        }),
        (this.setNodes = function(b) {
          a = b;
        }),
        (this.setLinks = function(a) {
          b = a;
        }),
        (this.setId = function(a) {
          f = a;
        }),
        (this.setRadius = function(a) {
          g = a;
        }),
        (this.setCanvas = function(a) {
          d = a;
        }),
        (this.setSize = function(a, b) {
          (h = a), (i = b);
        }),
        (this.setCharge = function(a) {
          j = a;
        }),
        (this.setLinkLength = function(a) {
          k = a;
        });
    }
    function initColor(r) {
      (r[0].color = '#007FFF'),
        (r[1].color = '#A142FF'),
        (r[2].color = '#FF85C2'),
        (r[3].color = '#FFA142'),
        (r[4].color = '#FF4242');
      for (var o = 5; o < r.length; o++) {
        var t = d3.color(r[(o % 4) + 1].color);
        r[o].color = t.brighter(1.5).toString();
      }
    }
    function initRadius(r) {
      (r[0].radius = 18),
        (r[1].radius = 14),
        (r[2].radius = 14),
        (r[3].radius = 14),
        (r[4].radius = 14);
      for (var o = 5; o < r.length; o++) r[o].radius = 10;
    }
    var canvas = document.querySelector('canvas'),
      width = 1300,
      height = 600;

    d3.csv('./nodes.csv', function(r, o) {
      for (var t = (o.length, 4), i = [], e = 1; e <= t; e++)
        i.push({ source: 0, target: e });
      for (var e = t + 1; e < o.length; e++)
        i.push({ source: (e % t) + 1, target: e });
      initColor(o), initRadius(o);
      debugger;
      var s = new relation();
      s.setNodes(o),
        s.setLinks(i),
        s.setCanvas(canvas),
        s.setSize(width, height),
        s.setRadius(12),
        s.setLinkLength(90),
        s.setCharge(-60),
        s.init(),
        s.run();
    });
  }
};
</script>

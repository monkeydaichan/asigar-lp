import 'package:flutter/material.dart';
import 'package:asigar_lp/layout/adaptive.dart';
import 'package:asigar_lp/constants.dart';
import 'package:flutter/rendering.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class FuturePoint extends StatelessWidget {
  FuturePoint({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final isDesktop = isDisplayDesktop(context);

    return Container(
        height: (isDesktop
            ? desktopHeight(context) * 0.5
            : mobileHeight(context) * 2),
        width: (isDesktop ? null : fullWidth(context)),
        color: bgColor2,
        child: (isDesktop
            ? Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: _mobileTiles,
              )
            : Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: _mobileTiles,
              )));
  }
}

List<Widget> _mobileTiles = <Widget>[
  PointListView(
      title: 'door to door',
      desc: 'あなたの家から相手の家まで\nDoortToDoorで\n荷物を運びます',
      icondata: FontAwesomeIcons.doorOpen),
  PointListView(
      title: 'On Time',
      desc: '時間通りに荷物を集荷\n配達します',
      icondata: FontAwesomeIcons.clock),
  PointListView(
      title: 'Easy App UI',
      desc: '使いやすいUIのアプリを\n提供します\n(Comming Soon)',
      icondata: FontAwesomeIcons.mobileAlt),
];

class PointListView extends StatelessWidget {
  PointListView(
      {Key key,
      @required this.title,
      @required this.desc,
      @required this.icondata})
      : super(key: key);

  String title;
  String desc;
  IconData icondata;
  @override
  Widget build(BuildContext context) {
    final isDesktop = isDisplayDesktop(context);

    return Column(
      mainAxisAlignment:
          (isDesktop ? MainAxisAlignment.spaceEvenly : MainAxisAlignment.start),
      children: <Widget>[
        Container(
          width: (isDesktop ? 150.0 : 100.0),
          height: (isDesktop ? 150.0 : 100.0),
          child: Icon(
            icondata,
            color: Colors.white,
            size: (isDesktop ? 68 : 34),
          ),
          decoration: new BoxDecoration(
            color: Theme.of(context).primaryColor,
            shape: BoxShape.circle,
          ),
        ),
        Padding(
          padding: EdgeInsets.all((isDesktop ? 16.0 : 8.0)),
          child: Text(title,
              style: Theme.of(context).textTheme.headline1.apply(
                  color: Colors.white, fontSizeDelta: (isDesktop ? 10 : 0))),
        ),
        Text(desc,
            textAlign: TextAlign.center,
            style: Theme.of(context).textTheme.headline2.apply(
                color: Colors.white, fontSizeDelta: (isDesktop ? 0 : 0))),
      ],
    );
  }
}

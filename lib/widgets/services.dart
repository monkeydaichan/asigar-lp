import 'package:flutter/material.dart';
import 'package:asigar_lp/layout/adaptive.dart';
import 'package:asigar_lp/constants.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_icons/flutter_icons.dart';

import '../constants.dart';
import '../constants.dart';
import '../constants.dart';
import '../constants.dart';
import '../layout/adaptive.dart';
import '../layout/adaptive.dart';
import '../layout/adaptive.dart';
import '../layout/adaptive.dart';

class Services extends StatelessWidget {
  Services({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final isDesktop = isDisplayDesktop(context);

    return Padding(
        padding: EdgeInsets.all(24.0),
        child: Container(
            // height: (isDesktop ? fullHeight(context) : mobileHeight(context) * 2),
            width: fullWidth(context),
            color: Colors.white,
            child: Column(
              children: <Widget>[
                Padding(
                  padding: EdgeInsets.only(bottom: 24.0),
                  child: Center(
                    child: Text(
                      "呼んだら\n取りに来る",
                      style: Theme.of(context).textTheme.headline1,
                      textAlign: TextAlign.center,
                    ),
                  ),
                ),
                Container(
                    // height: (isDesktop ? null : mobileHeight(context) * 2),
                    child: (isDesktop
                        ? Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            crossAxisAlignment: CrossAxisAlignment.center,
                            children: <Widget>[
                              DesktopServiceView(
                                mainColor: Theme.of(context).primaryColor,
                                subColor: secondaryColor,
                                desc: 'xxxxxxxxにメッセージを送ってください',
                                icondata: FontAwesome5.comment_dots,
                              ),
                              Padding(
                                padding: EdgeInsets.all(36.0),
                                child: Icon(FontAwesome.chevron_right),
                              ),
                              DesktopServiceView(
                                  mainColor: Theme.of(context).primaryColor,
                                  subColor: secondaryColor,
                                  desc: '指定した日時に集荷しに行きます',
                                  icondata: FontAwesome.truck),
                              Padding(
                                padding: EdgeInsets.all(36.0),
                                child: Icon(FontAwesome.chevron_right),
                              ),
                              DesktopServiceView(
                                  mainColor: Theme.of(context).primaryColor,
                                  subColor: secondaryColor,
                                  desc: '配達完了連絡を待ちます',
                                  icondata: FontAwesome.coffee),
                            ],
                          )
                        : Column(
                            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                            crossAxisAlignment: CrossAxisAlignment.center,
                            children: <Widget>[
                              DesktopServiceView(
                                mainColor: Theme.of(context).primaryColor,
                                subColor: secondaryColor,
                                desc: 'xxxxxxxxにメッセージを送ってください',
                                icondata: FontAwesome5.comment_dots,
                              ),
                              Padding(
                                padding: EdgeInsets.all(8.0),
                                child: Icon(FontAwesome.chevron_down),
                              ),
                              DesktopServiceView(
                                  mainColor: Theme.of(context).primaryColor,
                                  subColor: secondaryColor,
                                  desc: '指定した日時に集荷しに行きます',
                                  icondata: FontAwesome.truck),
                              Padding(
                                padding: EdgeInsets.all(8.0),
                                child: Icon(FontAwesome.chevron_down),
                              ),
                              DesktopServiceView(
                                  mainColor: Theme.of(context).primaryColor,
                                  subColor: secondaryColor,
                                  desc: '配達完了連絡を待ちます',
                                  icondata: FontAwesome.coffee),
                            ],
                          ))),
                Padding(
                  padding: EdgeInsets.only(top: 40.0, bottom: 24.0),
                  child: Text(
                    "呼んだら\n配達する",
                    style: Theme.of(context).textTheme.headline1,
                  ),
                ),
                Container(
                    child: (isDesktop
                        ? Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            crossAxisAlignment: CrossAxisAlignment.center,
                            children: <Widget>[
                              DesktopServiceView(
                                mainColor: secondaryColor,
                                subColor: Theme.of(context).primaryColor,
                                desc: 'xxxxxxxxにメッセージを送ってください',
                                icondata: FontAwesome5.comment_dots,
                              ),
                              Padding(
                                padding: EdgeInsets.all(36.0),
                                child: Icon(FontAwesome.chevron_right),
                              ),
                              DesktopServiceView(
                                  mainColor: secondaryColor,
                                  subColor: Theme.of(context).primaryColor,
                                  desc: '指定した日時に集荷しに行きます',
                                  icondata: FontAwesome.truck),
                              Padding(
                                padding: EdgeInsets.all(36.0),
                                child: Icon(FontAwesome.chevron_right),
                              ),
                              DesktopServiceView(
                                  mainColor: secondaryColor,
                                  subColor: Theme.of(context).primaryColor,
                                  desc: '配達完了連絡を待ちます',
                                  icondata: FontAwesome.coffee),
                            ],
                          )
                        : Column(
                            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                            crossAxisAlignment: CrossAxisAlignment.center,
                            children: <Widget>[
                              DesktopServiceView(
                                mainColor: secondaryColor,
                                subColor: Theme.of(context).primaryColor,
                                desc: 'xxxxxxxxにメッセージを送ってください',
                                icondata: FontAwesome5.comment_dots,
                              ),
                              Padding(
                                padding: EdgeInsets.all(8.0),
                                child: Icon(FontAwesome.chevron_down),
                              ),
                              DesktopServiceView(
                                  mainColor: secondaryColor,
                                  subColor: Theme.of(context).primaryColor,
                                  desc: '指定した日時に集荷しに行きます',
                                  icondata: FontAwesome.truck),
                              Padding(
                                padding: EdgeInsets.all(8.0),
                                child: Icon(FontAwesome.chevron_down),
                              ),
                              DesktopServiceView(
                                  mainColor: secondaryColor,
                                  subColor: Theme.of(context).primaryColor,
                                  desc: '配達完了連絡を待ちます',
                                  icondata: FontAwesome.coffee),
                            ],
                          ))),
              ],
            )));
  }
}

class DesktopServiceView extends StatelessWidget {
  DesktopServiceView(
      {Key key, this.desc, this.icondata, this.mainColor, this.subColor})
      : super(key: key);

  String desc;
  IconData icondata;
  Color mainColor;
  Color subColor;
  @override
  Widget build(BuildContext context) {
    final isDesktop = isDisplayDesktop(context);
    return Container(
      height: 200.0,
      width: 280.0,
      child: Row(
        children: <Widget>[
          Padding(
            padding: EdgeInsets.all(8.0),
            child: Icon(
              icondata,
              color: subColor,
              size: (isDesktop ? 40 : 34),
            ),
          ),
          Flexible(
            child: Padding(
              padding: EdgeInsets.all(8.0),
              child: Text(
                desc,
                style: Theme.of(context)
                    .textTheme
                    .headline2
                    .apply(color: subColor),
                maxLines: 3,
              ),
            ),
          ),
        ],
      ),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(10),
        color: mainColor,
        boxShadow: [
          BoxShadow(color: subColor, spreadRadius: 3),
        ],
      ),
    );
  }
}

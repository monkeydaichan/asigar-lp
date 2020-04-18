import 'package:flutter/material.dart';
import 'package:asigar_lp/layout/adaptive.dart';
import 'package:asigar_lp/constants.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_icons/flutter_icons.dart';

class Services extends StatelessWidget {
  Services({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final isDesktop = isDisplayDesktop(context);
    final isSmall = isDisplaySmallDesktop(context);
    final isMobile = isMobileDesktop(context);

    return Padding(
        padding: EdgeInsets.all(24.0),
        child: Container(
            // height: (isDesktop ? fullHeight(context) : mobileHeight(context) * 2),
            width: fullWidth(context),
            // color: Colors.white,
            child: Column(
              children: <Widget>[
                Padding(
                  padding: EdgeInsets.only(bottom: 24.0),
                  child: Center(
                    child: Text(
                      "荷物が届くまでの流れ",
                      style: Theme.of(context).textTheme.headline1,
                      textAlign: TextAlign.center,
                    ),
                  ),
                ),
                Container(
                  // height: (isDesktop ? null : mobileHeight(context) * 2),
                  child: (isSmall) || (isMobile)
                      ? Column(
                          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: <Widget>[
                            DesktopServiceView(
                              number: '①',
                              desc: 'xxxxxxxxにメッセージを送ってください',
                              icondata: FontAwesome5.comment_dots,
                            ),
                            Padding(
                              padding: EdgeInsets.all(8.0),
                              child: Icon(FontAwesome.chevron_down),
                            ),
                            DesktopServiceView(
                                number: '②',
                                desc: '指定した日時に集荷しに行きます',
                                icondata: FontAwesome.truck),
                            Padding(
                              padding: EdgeInsets.all(8.0),
                              child: Icon(FontAwesome.chevron_down),
                            ),
                            DesktopServiceView(
                                number: '③',
                                desc: '配達完了連絡を待ちます',
                                icondata: FontAwesome.coffee),
                            Padding(
                              padding: EdgeInsets.all(8.0),
                              child: Icon(FontAwesome.chevron_down),
                            ),
                          ],
                        )
                      : Padding(
                          padding: EdgeInsets.only(bottom: 16.0),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                            crossAxisAlignment: CrossAxisAlignment.center,
                            children: <Widget>[
                              DesktopServiceView(
                                number: '①',
                                desc: 'xxxxxxxxにメッセージを送ってください',
                                icondata: FontAwesome5.comment_dots,
                              ),
                              Icon(FontAwesome.chevron_right),
                              DesktopServiceView(
                                  number: '②',
                                  desc: '指定した日時に集荷しに行きます',
                                  icondata: FontAwesome.truck),
                              Icon(FontAwesome.chevron_right),
                              DesktopServiceView(
                                  number: '③',
                                  desc: '配達完了連絡を待ちます',
                                  icondata: FontAwesome.coffee),
                              Icon(FontAwesome.chevron_right),
                            ],
                          )),
                ),
                Container(
                  child: (isSmall) || (isMobile)
                      ? Column(
                          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: <Widget>[
                            DesktopServiceView(
                              number: '④',
                              desc: 'asigarから連絡するので，配達日時を伝えてください',
                              icondata: FontAwesome5.comment_dots,
                            ),
                            Padding(
                              padding: EdgeInsets.all(8.0),
                              child: Icon(FontAwesome.chevron_down),
                            ),
                            DesktopServiceView(
                                number: '⑤',
                                desc: '配達が来るまで待ちます',
                                icondata: FontAwesome.coffee),
                            Padding(
                              padding: EdgeInsets.all(8.0),
                              child: Icon(FontAwesome.chevron_down),
                            ),
                            DesktopServiceView(
                                number: '⑥',
                                desc: '指定した日時に配達します',
                                icondata: FontAwesome.truck),
                          ],
                        )
                      : Padding(
                          padding: EdgeInsets.only(top: 16.0),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                            crossAxisAlignment: CrossAxisAlignment.center,
                            children: <Widget>[
                              Icon(FontAwesome.chevron_right),
                              DesktopServiceView(
                                number: '④',
                                desc: 'asigarから連絡するので，配達日時を伝えてください',
                                icondata: FontAwesome5.comment_dots,
                              ),
                              Icon(FontAwesome.chevron_right),
                              DesktopServiceView(
                                  number: '⑤',
                                  desc: '配達が来るまで待ちます',
                                  icondata: FontAwesome.coffee),
                              Icon(FontAwesome.chevron_right),
                              DesktopServiceView(
                                  number: '⑥',
                                  desc: '指定した日時に配達します',
                                  icondata: FontAwesome.truck),
                            ],
                          )),
                ),
              ],
            )));
  }
}

class DesktopServiceView extends StatelessWidget {
  DesktopServiceView({
    Key key,
    this.desc,
    this.icondata,
    this.number,
  }) : super(key: key);

  String desc;
  String number;
  IconData icondata;

  @override
  Widget build(BuildContext context) {
    final isDesktop = isDisplayDesktop(context);
    final isSmall = isDisplaySmallDesktop(context);
    return Padding(
      padding: EdgeInsets.all(0.0),
      child: ConstrainedBox(
        constraints: BoxConstraints(
            minHeight: (isDesktop) ? 180.0 : 150,
            minWidth: (isDesktop) ? 180.0 : 280,
            maxHeight: (isDesktop) ? 180.0 : 180,
            maxWidth: (isDesktop) ? 250.0 : 280),
        child: Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(10),
            color: Theme.of(context).primaryColor,
            boxShadow: [
              BoxShadow(color: secondaryColor, spreadRadius: 3),
            ],
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: <Widget>[
              Align(
                alignment: Alignment.topLeft,
                child: Padding(
                  padding: EdgeInsets.all(8.0),
                  child: Text(
                    number,
                    style: Theme.of(context)
                        .textTheme
                        .headline2
                        .apply(color: secondaryColor),
                  ),
                ),
              ),
              Row(
                children: <Widget>[
                  Padding(
                    padding: EdgeInsets.all(8.0),
                    child: Icon(
                      icondata,
                      color: secondaryColor,
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
                            .apply(color: secondaryColor),
                        maxLines: 6,
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}

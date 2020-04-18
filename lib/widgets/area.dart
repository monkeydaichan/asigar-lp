import 'package:flutter/material.dart';
import 'package:asigar_lp/layout/adaptive.dart';
import 'package:asigar_lp/constants.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_icons/flutter_icons.dart';

import '../layout/adaptive.dart';
import '../layout/adaptive.dart';

class Area extends StatelessWidget {
  Area({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final isDesktop = isDisplayDesktop(context);
    final isSmall = isDisplaySmallDesktop(context);
    final isMobile = isMobileDesktop(context);

    return Padding(
        padding: EdgeInsets.all((isDesktop ? 24.0 : 16.0)),
        child: Container(
            width: fullWidth(context),
            child: (isSmall) || (isMobile)
                ? Column(
                    children: <Widget>[
                      Padding(
                        padding: EdgeInsets.all(24.0),
                        child: Column(
                          children: <Widget>[
                            AreaTitle(
                              title: '提供エリア',
                            ),
                            AreadescView(
                              desc: 'アスンシオン',
                            ),
                            AreadescView(
                              desc: 'フェルナンドデラモラ',
                            )
                          ],
                        ),
                      ),
                      Padding(
                        padding: EdgeInsets.all(24.0),
                        child: Column(
                          children: <Widget>[
                            AreaTitle(
                              title: 'サービス提供時間',
                            ),
                            AreadescView(
                              desc: '10:00-17:00',
                            )
                          ],
                        ),
                      ),
                      Padding(
                        padding: EdgeInsets.all(24.0),
                        child: Column(
                          children: <Widget>[
                            AreaTitle(
                              title: 'アプリ',
                            ),
                            AreadescView(
                              desc: 'Comming Soon...',
                            )
                          ],
                        ),
                      ),
                    ],
                  )
                : Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      Padding(
                        padding: EdgeInsets.all(24.0),
                        child: Column(
                          children: <Widget>[
                            AreaTitle(
                              title: '提供エリア',
                            ),
                            AreadescView(
                              desc: 'アスンシオン',
                            ),
                            AreadescView(
                              desc: 'フェルナンドデラモラ',
                            )
                          ],
                        ),
                      ),
                      Padding(
                        padding: EdgeInsets.all(24.0),
                        child: Column(
                          children: <Widget>[
                            AreaTitle(
                              title: 'サービス提供時間',
                            ),
                            AreadescView(
                              desc: '10:00-17:00',
                            )
                          ],
                        ),
                      ),
                      Padding(
                        padding: EdgeInsets.all(24.0),
                        child: Column(
                          children: <Widget>[
                            AreaTitle(
                              title: 'アプリ',
                            ),
                            AreadescView(
                              desc: 'Comming Soon...',
                            )
                          ],
                        ),
                      ),
                    ],
                  )));
  }
}

class AreadescView extends StatelessWidget {
  AreadescView({
    Key key,
    this.desc,
  }) : super(key: key);

  String desc;

  @override
  Widget build(BuildContext context) {
    final isDesktop = isDisplayDesktop(context);
    final isSmall = isDisplaySmallDesktop(context);
    return Padding(
      padding: EdgeInsets.only(bottom: (isDesktop ? 16.0 : 8.0)),
      child: Center(
        child: Text(
          desc,
          style: Theme.of(context).textTheme.headline2.apply(),
          textAlign: TextAlign.center,
        ),
      ),
    );
  }
}

class AreaTitle extends StatelessWidget {
  AreaTitle({
    Key key,
    this.title,
  }) : super(key: key);

  String title;

  @override
  Widget build(BuildContext context) {
    final isDesktop = isDisplayDesktop(context);
    final isSmall = isDisplaySmallDesktop(context);
    return Padding(
      padding: EdgeInsets.only(bottom: (isDesktop ? 24.0 : 16.0)),
      child: Center(
        child: Text(
          title,
          style: Theme.of(context).textTheme.headline1,
          textAlign: TextAlign.center,
        ),
      ),
    );
    ;
  }
}

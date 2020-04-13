<template>
    <div>
        <section class="main">
            <DashboardNav/>
            <div class="content">
                <div class="container">
                    <button @click.prevent="getDownlines">get Downlines</button>
                    <div class="row mb-5">
                        <div class="col-md-3">
                            <h2>John Doe</h2>
                        </div>
                        <div class="col-md-6"></div>
                        <div class="col-md-3">
                            <h4>Level <span class="badge badge-info">{{ stage_completed }}</span><span class="pull-right"><button class="btn btn-blue" data-toggle="modal" data-target="#myModal">balance</button></span></h4>

                            <!-- The Modal -->
                            <div class="modal" id="myModal">
                                <div class="modal-dialog">
                                    <div class="modal-content">

                                    <!-- Modal Header -->
                                    <div class="modal-header">
                                        <h4 class="modal-title">ACCOUNT</h4>
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    </div>

                                    <!-- Modal body -->
                                    <div class="modal-body">
                                        <div class="card card-stats">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-5 col-md-4">
                                                    <div class="icon-big text-center icon-warning">
                                                        <i class="fab fa-btc text-white"></i>
                                                    </div>
                                                    </div>
                                                    <div class="col-7 col-md-8">
                                                    <div class="numbers">
                                                        <p class="card-category">Total Balance</p>
                                                        <p class="balance"> {{ reward }} Naira</p>
                                                        <p></p>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card card-stats">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-5 col-md-4">
                                                    <div class="icon-big text-center icon-warning">
                                                        <i class="fas fa-award text-white"></i>
                                                    </div>
                                                    </div>
                                                    <div class="col-7 col-md-8">
                                                    <div class="numbers">
                                                        <p class="card-category">Total Reward</p>
                                                        <p class="balance"></p>
                                                        <p></p>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Modal footer -->
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-blue">Withdraw Reward</button>
                                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                    </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tree" >
                        <div class="row">
                            <div class="col-md-10 col-9 text-center">
                                <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                <p>{{$auth.user.name}} <span class="badge badge-success">{{ stage_completed }}</span></p>
                            </div>
                            <div class="col-md-2 col-3">
                                <p>Upliner</p>
                            </div>
                        </div>

                        <div class="row" >
                            <div class="col-md-10 col-9 text-center">
                                <div class="row">
                                    <div class="col-md-6 col-6">
                                        <div class="pointer text-center"></div>
                                    </div>
                                    <div class="col-md-6 col-6">
                                        <div class="pointer text-center"></div>
                                    </div>
                                </div>
                               
                            </div>
                            <div class="col-md-2 col-3">
                               
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-md-10 col-9 text-center">
                                <div class="row">
                                    <div class="col-md-6 col-6">
                                        <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                        <p>{{ childrens[0].name}} <span class="badge badge-info">{{childrens[0].stage_completed}}</span></p>
                                    </div>
                                    <div class="col-md-6 col-6">
                                         <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                        <p>Jack Bower <span class="badge badge-danger">1</span></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-2 col-3">
                                <p>Downliners</p>
                                
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-10 col-9 text-center">
                                <div class="row">
                                    <div class="col-md-6 col-6">
                                        <div class="row">
                                            <div class="col-md-6 col-6">
                                                <div class="pointer text-center"></div>
                                            </div>
                                            <div class="col-md-6 col-6">
                                                <div class="pointer text-center"></div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div class="col-md-6 col-6">
                                       <div class="row">
                                            <div class="col-md-6 col-6">
                                                <div class="pointer text-center"></div>
                                            </div>
                                            <div class="col-md-6 col-6">
                                                <div class="pointer text-center"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                            <div class="col-md-2 col-3">
                               
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-10 col-9 text-center">
                                <div class="row">
                                    <div class="col-md-6 col-6">
                                        <div class="row">
                                            <div class="col-md-6 col-6">
                                               <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                            <!-- <h5>{{ childrens[0]}} <span class="badge badge-info">{{childrens[0]}}</span></h5> -->
                                            </div>
                                            <div class="col-md-6 col-6">
                                               <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                             <!-- <h5>{{ childrens[0]}} <span class="badge badge-info">{{childrens[0]}}</span></h5> -->
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div class="col-md-6 col-6">
                                       <div class="row">
                                            <div class="col-md-6 col-6">
                                                <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                            <!-- <h5>{{ childrens[0]}} <span class="badge badge-info">{{childrens[0]}}</span></h5> -->
                                            </div>
                                            <div class="col-md-6 col-6">
                                                <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                            <!-- <h5>{{ childrens[0]}} <span class="badge badge-info">{{childrens[0]}}</span></h5> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                            <div class="col-md-2 col-3">
                               
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-10 col-9 text-center">
                                <div class="row">
                                    <div class="col-md-6 col-6">
                                        <div class="row">
                                            <div class="col-md-6 col-6">
                                                <div class="row">
                                                    <div class="col-md-6 col-6">
                                                        <div class="pointer text-center"></div>
                                                    </div>
                                                    <div class="col-md-6 col-6">
                                                        <div class="pointer text-center"></div>
                                                    </div>
                                                </div>
                                                 

                                            </div>
                                            <div class="col-md-6 col-6">
                                                <div class="row">
                                                    <div class="col-md-6 col-6">
                                                        <div class="pointer text-center"></div>
                                                    </div>
                                                    <div class="col-md-6 col-6">
                                                        <div class="pointer text-center"></div>
                                                    </div>
                                                </div>
                                                 

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-6">
                                        <div class="row">
                                            <div class="col-md-6 col-6">
                                                <div class="row">
                                                    <div class="col-md-6 col-6">
                                                        <div class="pointer text-center"></div>
                                                    </div>
                                                    <div class="col-md-6 col-6">
                                                        <div class="pointer text-center"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-6">
                                                <div class="row">
                                                    <div class="col-md-6 col-6">
                                                        <div class="pointer text-center"></div>
                                                    </div>
                                                    <div class="col-md-6 col-6">
                                                        <div class="pointer text-center"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                            <div class="col-md-2 col-3">
                               
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-10 col-9 text-center">
                                <div class="row">
                                    <div class="col-md-6 col-6">
                                        <div class="row">
                                            <div class="col-md-6 col-6">
                                                <div class="row">
                                                    <div class="col-md-6 col-6">
                                                       <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                                    <!-- <h5>{{ childrens[0]}} <span class="badge badge-info">{{childrens[0]}}</span></h5> -->
                                                    </div>
                                                    <div class="col-md-6 col-6">
                                                       <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                                    <!-- <h5>{{ childrens[0]}} <span class="badge badge-info">{{childrens[0]}}</span></h5> -->
                                                    </div>
                                                </div>
                                                 

                                            </div>
                                            <div class="col-md-6 col-6">
                                                <div class="row">
                                                    <div class="col-md-6 col-6">
                                                        <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                                    <!-- <h5>{{ childrens[0]}} <span class="badge badge-info">{{childrens[0]}}</span></h5> -->
                                                    </div>
                                                    <div class="col-md-6 col-6">
                                                        <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                                    <!-- <h5>{{ childrens[0]}} <span class="badge badge-info">{{childrens[0]}}</span></h5> -->
                                                    </div>
                                                </div>
                                                 

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-6">
                                        <div class="row">
                                            <div class="col-md-6 col-6">
                                                <div class="row">
                                                    <div class="col-md-6 col-6">
                                                        <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                                    <!-- <h5>{{ childrens[0]}} <span class="badge badge-info">{{childrens[0]}}</span></h5> -->
                                                    </div>
                                                    <div class="col-md-6 col-6">
                                                       <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                                    <!-- <h5>{{ childrens[0]}} <span class="badge badge-info">{{childrens[0]}}</span></h5> -->
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-6">
                                                <div class="row">
                                                    <div class="col-md-6 col-6">
                                                        <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                                    <!-- <h5>{{ childrens[0]}} <span class="badge badge-info">{{childrens[0]}}</span></h5> -->
                                                    </div>
                                                    <div class="col-md-6 col-6">
                                                        <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                                    <!-- <h5>{{ childrens[0]}} <span class="badge badge-info">{{childrens[0]}}</span></h5> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                            <div class="col-md-2 col-3">
                               
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-10 col-9 text-center">
                                <div class="row">
                                    <div class="col-md-6 col-6">
                                        <div class="row">
                                            <div class="col-md-6 col-6">
                                                <div class="row">
                                                    <div class="col-md-6 col-6">
                                                        <div class="row">
                                                            <div class="col-md-6 col-6">
                                                                <div class="pointer text-center"></div>
                                                            </div>
                                                            <div class="col-md-6 col-6">
                                                                <div class="pointer text-center"></div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div class="col-md-6 col-6">
                                                        <div class="row">
                                                            <div class="col-md-6 col-6">
                                                                <div class="pointer text-center"></div>
                                                            </div>
                                                            <div class="col-md-6 col-6">
                                                                <div class="pointer text-center"></div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-6">
                                                <div class="row">
                                                    <div class="col-md-6 col-6">
                                                        <div class="row">
                                                            <div class="col-md-6 col-6">
                                                                <div class="pointer text-center"></div>
                                                            </div>
                                                            <div class="col-md-6 col-6">
                                                                <div class="pointer text-center"></div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div class="col-md-6 col-6">
                                                        <div class="row">
                                                            <div class="col-md-6 col-6">
                                                                <div class="pointer text-center"></div>
                                                            </div>
                                                            <div class="col-md-6 col-6">
                                                                <div class="pointer text-center"></div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div class="col-md-6 col-6">
                                       <div class="row">
                                            <div class="col-md-6 col-6">
                                                <div class="row">
                                                    <div class="col-md-6 col-6">
                                                        <div class="row">
                                                            <div class="col-md-6 col-6">
                                                                <div class="pointer text-center"></div>
                                                            </div>
                                                            <div class="col-md-6 col-6">
                                                                <div class="pointer text-center"></div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div class="col-md-6 col-6">
                                                        <div class="row">
                                                            <div class="col-md-6 col-6">
                                                                <div class="pointer text-center"></div>
                                                            </div>
                                                            <div class="col-md-6 col-6">
                                                                <div class="pointer text-center"></div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-6">
                                                <div class="row">
                                                    <div class="col-md-6 col-6">
                                                        <div class="row">
                                                            <div class="col-md-6 col-6">
                                                                <div class="pointer text-center"></div>
                                                            </div>
                                                            <div class="col-md-6 col-6">
                                                                <div class="pointer text-center"></div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div class="col-md-6 col-6">
                                                        <div class="row">
                                                            <div class="col-md-6 col-6">
                                                                <div class="pointer text-center"></div>
                                                            </div>
                                                            <div class="col-md-6 col-6">
                                                                <div class="pointer text-center"></div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                            <div class="col-md-2 col-3">
                               
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-10 col-9 text-center">
                                <div class="row">
                                    <div class="col-md-6 col-6">
                                        <div class="row">
                                            <div class="col-md-6 col-6">
                                                <div class="row">
                                                    <div class="col-md-6 col-6">
                                                        <div class="row">
                                                            <div class="col-md-6 col-6">
                                                                <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                                            <p class="text-center">{{ childrens[0]}} <span class="badge badge-info">{{childrens[0]}}</span></p>
                                                            </div>
                                                            <div class="col-md-6 col-6">
                                                                <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                                            <!-- <h5>{{ childrens[0]}} <span class="badge badge-info">{{childrens[0]}}</span></h5> -->
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div class="col-md-6 col-6">
                                                        <div class="row">
                                                            <div class="col-md-6 col-6">
                                                                <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                                            <!-- <h5>{{ childrens[0]}} <span class="badge badge-info">{{childrens[0]}}</span></h5> -->
                                                            </div>
                                                            <div class="col-md-6 col-6">
                                                                <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                                            <!-- <h5>{{ childrens[0]}} <span class="badge badge-info">{{childrens[0]}}</span></h5> -->
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-6">
                                                <div class="row">
                                                    <div class="col-md-6 col-6">
                                                        <div class="row">
                                                            <div class="col-md-6 col-6">
                                                               <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                                            <!-- <h5>{{ childrens[0]}} <span class="badge badge-info">{{childrens[0]}}</span></h5> -->
                                                            </div>
                                                            <div class="col-md-6 col-6">
                                                               <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                                            <!-- <h5>{{ childrens[0]}} <span class="badge badge-info">{{childrens[0]}}</span></h5> -->
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div class="col-md-6 col-6">
                                                        <div class="row">
                                                            <div class="col-md-6 col-6">
                                                               <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                                        <!-- <h5>{{ childrens[0]}} <span class="badge badge-info">{{childrens[0]}}</span></h5> -->
                                                            </div>
                                                            <div class="col-md-6 col-6">
                                                               <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                                            <!-- <h5>{{ childrens[0]}} <span class="badge badge-info">{{childrens[0]}}</span></h5> -->
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div class="col-md-6 col-6">
                                       <div class="row">
                                            <div class="col-md-6 col-6">
                                                <div class="row">
                                                    <div class="col-md-6 col-6">
                                                        <div class="row">
                                                            <div class="col-md-6 col-6">
                                                                <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                                            <!-- <h5>{{ childrens[0]}} <span class="badge badge-info">{{childrens[0]}}</span></h5> -->
                                                            </div>
                                                            <div class="col-md-6 col-6">
                                                                <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                                            <!-- <h5>{{ childrens[0]}} <span class="badge badge-info">{{childrens[0]}}</span></h5> -->
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div class="col-md-6 col-6">
                                                        <div class="row">
                                                            <div class="col-md-6 col-6">
                                                                <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                                            <!-- <h5>{{ childrens[0]}} <span class="badge badge-info">{{childrens[0]}}</span></h5> -->
                                                            </div>
                                                            <div class="col-md-6 col-6">
                                                                <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                                            <!-- <h5>{{ childrens[0]}} <span class="badge badge-info">{{childrens[0]}}</span></h5> -->
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-6">
                                                <div class="row">
                                                    <div class="col-md-6 col-6">
                                                        <div class="row">
                                                            <div class="col-md-6 col-6">
                                                                <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                                            <!-- <h5>{{ childrens[0]}} <span class="badge badge-info">{{childrens[0]}}</span></h5> -->
                                                            </div>
                                                            <div class="col-md-6 col-6">
                                                                <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                                            <!-- <h5>{{ childrens[0]}} <span class="badge badge-info">{{childrens[0]}}</span></h5> -->
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div class="col-md-6 col-6">
                                                        <div class="row">
                                                            <div class="col-md-6 col-6">
                                                                <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                                            <!-- <h5>{{ childrens[0]}} <span class="badge badge-info">{{childrens[0]}}</span></h5> -->
                                                            </div>
                                                            <div class="col-md-6 col-6">
                                                                <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                                            <!-- <h5>{{ childrens[0]}} <span class="badge badge-info">{{childrens[0]}}</span></h5> -->
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                            <div class="col-md-2 col-3">
                               
                            </div>
                        </div>

                        <!-- <div class="row">
                            <div class="col-md-8 col-9 text-center">
                                <div class="row">
                                    <div class="col-md-6 col-6">
                                        <div class="pointer text-center"></div>
                                    </div>
                                    <div class="col-md-6 col-6">
                                        <div class="pointer text-center"></div>
                                    </div>
                                </div>
                               
                            </div>
                            <div class="col-md-4 col-3">
                               
                            </div>
                        </div> -->

                        <!-- <div class="row">
                            <div class="col-md-8 col-9 text-center">
                                <div class="row">
                                    <div class="col-md-6 col-6">
                                        <div class="pointer text-center"></div>
                                    </div>
                                    <div class="col-md-6 col-6">
                                        <div class="pointer text-center"></div>
                                    </div>
                                </div>
                               
                            </div>
                            <div class="col-md-4 col-3">
                               
                            </div>
                        </div> -->

                        <!-- <div class="row">
                            <div class="col-md-8 col-9 text-center">
                                <div class="row">
                                    <div class="col-md-6 col-6">
                                        <div class="pointer text-center"></div>
                                    </div>
                                    <div class="col-md-6 col-6">
                                        <div class="pointer text-center"></div>
                                    </div>
                                </div>
                               
                            </div>
                            <div class="col-md-4 col-3">
                               
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>

            
            
        </section>
        <footer class="main-footer">
        <strong>Copyright &copy; 2020 <a href="#">HackTeam</a>.</strong>
        All rights reserved.
        <div class="pull-right d-none d-sm-inline-block">
            <b>Version</b> 3.0.2
        </div>
        </footer>
    </div>
</template>

<script>
import DashboardNav from './../../components/partials/DashboardNavbar'

export default {
     middleware: ['redirectIfAuthenticated'],
    layout: 'Udashboard',
    components: {
        DashboardNav
    },
    data() {
        return {
            reward: '',
            stage_completed: '',
            childrens: []
        }
    },
    methods: {
        async getDownlines() {
            const emailed = await this.$axios.$get('/user/get-down-lines')
            console.log(emailed)
            this.childrens = emailed.data.children
            console.log(this.childrens)
        },
        async getReward() {
           try {

                const rewards = await this.$axios.$get('/user/get-stage-rewards');
                this.reward = rewards.data.reward.balance
                this.stage_completed = rewards.data.stage_completed
                console.log("This is " +rewards)
           } catch(e) {
               console.log(`this is ${e}`)
               alert("Please create a wallet")
               window.location.replace('/user/createWallet')
           }
               
            
        }
    },
    mounted() {
        this.getReward(),
        this.getDownlines()
    }
}
</script>

<style scoped>
    .main {
    background: rgba(203, 203, 210, 0.15);
    position: relative;
    float: right;
    width: calc(100% - 100px);
    }

    .main .content {
    padding: 30px 15px;
    min-height: calc(100vh - 160px);
    /* margin-top: 30px; */
    background: #dddddd;
    }

    .pointer {
        width: 4px;
        height: 30px;
        border: 1px solid #000;
        margin: 20px auto;
        background: #000;

    }

    .small-img {
        height: 30px;
    }

    p {
        font-size: 13px;
    }

    .card {
    border-radius: 12px;
    box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.15);
    background-color: var(--main-bg-color);
    color: #252422;
    margin-bottom: 20px;
    position: relative;
    border: 0 none;
    transition: transform 0.3s cubic-bezier(0.34, 2, 0.6, 1), box-shadow 0.2s ease;
    }

    .card-header {
    background: #fff;
    border-radius: 12px;
    }

    .card-stats .card-body .numbers .card-category {
    color: #fff;
    font-size: 18px;
    line-height: 1.4em;
    font-weight: 600;
    }

    .card-stats .card-body .numbers p {
    margin-bottom: 0;
    text-align: right;
    color: #fff;
    letter-spacing: 2px;
    }

    .card-stats .card-body .numbers .balance {
    font-size: 28px;
    font-weight: 900;
    }

    .card-stats .icon-big {
    font-size: 3em;
    min-height: 64px;
    }


    .main-footer {
    background: rgba(203, 203, 210, 0.15);
    position: relative;
    float: right;
    width: calc(100% - 100px);
    padding: 10px;
    }

</style>
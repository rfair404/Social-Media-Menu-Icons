<?php
/*
* Plugin Name: Social Media Menu Icons
* Author: Russell Fair
* Description: Adds social menu icons to a WordPress Nav Menu
*/

add_action('init', 'smmi_register_styles');
function smmi_register_styles(){
    $version = (int) '203';
    wp_register_style('smmi-fa', '//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css', array(), '410', 'screen');
    wp_register_style('smmi', plugins_url( 'lib/css/smmi.min.css' , __FILE__ ), array('smmi-fa'), $version, 'screen');
}

add_action('wp_print_scripts', 'smmi_output_css');
function smmi_output_css(){
    if(!is_admin())
        wp_enqueue_style('smmi');
}

add_filter('wp_nav_menu_args', 'smmi_menu_args', 1, 10);
function smmi_menu_args($args){
    $args['menu_class'] = $args['menu_class'] . ' smmi-navigation';
    return $args;
}

<?php

/**
 * Fired when the plugin is uninstalled.
 *
 * When populating this file, consider the following
 * of control:
 *
 * - This method should be static
 * - Check if the $_REQUEST content actually is the plugin name
 * - Run an admin referrer check to make sure it goes through authentication
 * - Verify the output of $_GET makes sense
 * - Repeat with other user roles. Best directly by using the links/query string parameters.
 * - Repeat things for multisite. Once for a single site in the network, once sitewide.
 *
 * @link       https://addonspress.com/
 * @since      1.0.0
 *
 * @package    Advanced_Import
 */

// If uninstall not called from WordPress, then exit.
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit;
}

global $wpdb;

delete_option( 'advanced_import_settings_options' );
delete_option( 'advanced_import_reset_notice' );

$advanced_import_transients = array(
	'content.json',
	'widgets.json',
	'options.json',
	'delayed_posts',
	'imported_term_ids',
	'imported_post_ids',
	'post_orphans',
	'adi_elementor_data_posts',
);

foreach ( $advanced_import_transients as $advanced_import_transient ) {
	delete_transient( $advanced_import_transient );
}

// Clean up the single dynamic tracking option row.
$advanced_import_plugin_slug = defined( 'ADVANCED_IMPORT_PLUGIN_NAME' ) ? ADVANCED_IMPORT_PLUGIN_NAME : 'advanced-import';
delete_option( $advanced_import_plugin_slug . '-agent-' . md5( 'https://tracking.acmeit.org/' ) );

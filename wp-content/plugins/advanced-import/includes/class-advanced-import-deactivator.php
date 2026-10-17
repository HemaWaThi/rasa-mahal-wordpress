<?php

/**
 * Fired during plugin deactivation
 *
 * @link       https://addonspress.com/
 * @since      1.0.0
 *
 * @package    Advanced_Import
 * @subpackage Advanced_Import/includes
 */

/**
 * Fired during plugin deactivation.
 *
 * This class defines all code necessary to run during the plugin's deactivation.
 *
 * @since      1.0.0
 * @package    Advanced_Import
 * @subpackage Advanced_Import/includes
 * @author     Addons Press <addonspress.com>
 */
class Advanced_Import_Deactivator {

	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function deactivate() {
		wp_clear_scheduled_hook( 'advanced_import_weekly_scheduled_events' );
		wp_clear_scheduled_hook( 'advanced_import_daily_scheduled_events' );
	}

}

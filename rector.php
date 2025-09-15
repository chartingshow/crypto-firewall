<?php
declare(strict_types=1);

use Rector\Config\RectorConfig;
use Rector\Set\ValueObject\LevelSetList;
use Rector\Set\ValueObject\SetList;
use Rector\ValueObject\PhpVersion;

// Optional: add Laravel set if driftingly/rector-laravel is installed
use RectorLaravel\Set\LaravelSetList;

return static function (RectorConfig $rectorConfig): void {
    // Paths to refactor
    $rectorConfig->paths([
        __DIR__ . '/src',
        __DIR__ . '/tests',
    ]);

    // Target PHP version (helps Rector choose appropriate rules)
    if (class_exists(\Rector\ValueObject\PhpVersion::class)) {
        $rectorConfig->phpVersion(PhpVersion::PHP_84);
    }

    // Core sets to enable - a broad, safe set of automated fixes:
    $sets = [
        LevelSetList::UP_TO_PHP_84,   // use rules for PHP 8.4 features & migrations
        SetList::CODE_QUALITY,
        SetList::CODING_STYLE,
        SetList::DEAD_CODE,
        SetList::TYPE_DECLARATION,
        SetList::EARLY_RETURN,
        SetList::NAMING,
        SetList::PRIVATIZATION,
    ];

    // If the Laravel set package is installed, add Laravel-specific sets
    if (class_exists(LaravelSetList::class)) {
        // Add whichever Laravel sets the package exposes; LARAVEL_110 is commonly provided
        if (defined(LaravelSetList::class . '::LARAVEL_110')) {
            $sets[] = LaravelSetList::LARAVEL_110;
        }
        // some driftingly versions also expose LARAVEL_CODE_QUALITY etc; add if present:
        if (defined(LaravelSetList::class . '::LARAVEL_CODE_QUALITY')) {
            $sets[] = LaravelSetList::LARAVEL_CODE_QUALITY;
        }
    }

    $rectorConfig->sets($sets);

    // Autoload vendor (helps Rector find Laravel classes, etc.)
    $rectorConfig->autoloadPaths([
        __DIR__ . '/vendor/autoload.php',
    ]);

    // Skip vendor & other noisy dirs
    $rectorConfig->skip([
        __DIR__ . '/vendor',
        __DIR__ . '/storage',
        __DIR__ . '/node_modules',
    ]);

    // Cache dir
    $rectorConfig->cacheDirectory(__DIR__ . '/.rector/cache');
};
